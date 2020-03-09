# Rails-Vue-App

Rails-Vue-Appは、自己紹介Webページならびに、タスク管理アプリケーションを融合したポートフォリオである。

## Concept

Railsのみのアプリケーション構造は理解できたので、APIモードで、フロントエンドとバックエンドを切り離して構築してみようという意図で作成。
Hippy_appで途中まで作成したタスク管理アプリケーションの一部を利用し、作成した。
この二つの違いは、フロントエンドとバックエンド両方Dockerで構築したか、否かである。

## Architecture
rails-vue
    |- backend
         |-app..
         |-Dockerfile
    |- frontend
         |-app..
         |-Dockerfile
    |- docker-compose.yml

## Development tips
* 開発ガイド(フロントエンド)(./doc/development_guide_frontend.md)
* 開発ガイド（バックエンド）(./doc/development_guide_backend.md)
