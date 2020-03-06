<template>
  <div>
    <v-container fluid>
      <v-row justify="center">
        <v-col>
          <v-card>
            <v-app-bar color="grey" dark>
              <v-tool-title>
                タスク管理アプリ
              </v-tool-title>
            </v-app-bar>
            <v-form
              v-on:submit.prevent="postTask"
              ref="listform"
              lazy-validation
            >
              <v-container fluid class="pa-1">
                <v-row>
                  <v-col cols="6">
                    <v-text-field
                      clearable
                      label="新しいタスク"
                      v-model="newTask"
                    >
                    </v-text-field>
                    <p>{{ message }}</p>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-simple-table fixed-header height="500px">
      <template v-slot:default>
        <thread>
          <tr class="font-weight-bold " align="center">
            <th class="text-left">Task name</th>
            <th class="text-left">Action</th>
          </tr>
        </thread>

        <tbody id="dragTable">
          <draggable v-model="tasks" tag="tbody">
            <tr v-for="task in tasks" :key="task">
              <td>{{ task.name }}</td>
              <td>
                <v-btn icon>
                  <v-icon v-on:click="deleteTask(task.id)">delete</v-icon>
                </v-btn>
              </td>
            </tr>
          </draggable>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import axios from "axios";
const hostName = "localhost:3000";
const path = "/api/tasks";

export default {
  components: {
    draggable
  },
  data() {
    return {
      newTask: "",
      tasks: [],
      message: ""
    };
  },
  methods: {
    getTasks: function() {
      axios
        .get(`http://${hostName}${path}`)
        .then(response => {
          this.tasks = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    postTask: function() {
      if (!this.newTask) {
        return (this.message = "タスク名を1文字以上入力してください");
      } else {
        axios
          .post(`http://${hostName}${path}`, `task[name]=${this.newTask}`)
          .then(response => {
            this.getTasks();
            this.newTask = "";
          })
          .catch(function(error) {
            console.log(error);
          });
      }
      this.message = "";
    },
    deleteTask: function(id) {
      axios
        .delete(`http://${hostName}${path}/${id}`)
        .then(response => {
          this.getTasks();
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  mounted: function() {
    this.getTasks();
  }
};
</script>

<style lang="scss">
tbody tr:nth-of-type(even) {
  background-color: rgba(0, 0, 0, 0.01);
}
tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.05);
}
p {
  font-size: 20px;
  color: red;
}
</style>
