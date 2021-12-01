# モダンなJSフレームワークまとめてみた 〜 Next js編 〜

## 〜Next.jsとは？〜

Next.jsは、[ZEIT社](https://zeit.co/)によって開発されたReactベースのフロントエンドフレームワークです

Next.jsを使うことでReactだけではできないSSR/SG・headの変更・動的なルーティングなどを可能にします

## 〜特徴〜

Next.jsには、パフォーマンス、SEOやアプリケーション開発の効率化に関わる

Routing, SSR・ SG(SSG), Imageに関する機能が事前に組み込まされています

### ・動的なRouting

　　Reactではプラグインを使用することでルーティングを可能にしていたが、

　　Next.jsではLink componentを用いるだけでルーティングが使用でき、getStaticPaths

　　やgetStaticPropsを使用することでダイナミックルーティングなど、

　　動的なルーティングが可能になる

### ・**SSRとS**G

　　Next.jsではReactではできなかったSG・SSRの切り替えができるようになり、

　　SPAだけでは難しかったSEO対策、パフォーマンスの向上が見込める

　

> SG(SSG) とは..
> 
>  Static Generation の略で、 npm run build などビルドされるタイミングで、
>  依存関係にあるHTMLが事前に生成され、表示をより高速化することができる

> SSRとは...
> 
>  Server-side Renderingの略で、リクエストが起こる度に サーバ側でHTMLを生成され、
>  ページを常に最新状態に維持することができる

### ・画像の最適化

　　Next.jsでは、Image componentを使用することでブラウザが

　　サポートしている場合にはWebPのような最新の形式で画像をリサイズ、最適化ができる

## 〜Next.jsをセットアップしよう〜

　

※node環境が無い場合はあらかじめインストールしてください

- 開発環境

　macOS Big Sur 11.6 (M1, 2020) 

　node 14.18.1

  npm 6.14.15

・Next.jsのインストール

```
npx create-next-app@latest --ts
# or
yarn create next-app --typescript
```

npxまたはyarnでNext.jsのインストールをします

<aside>
npx: 1個のパッケージを1.628秒でインストールしました。

? **What is your project named?** ›　任意のプロジェクト名

</aside>

作成するプロジェクト名を聞かれるので入力

<aside>
cd 任意のプロジェクト名

</aside>

インストールが完了したら任意のプロジェクトディレクトリに移動

<aside>
npm run dev

</aside>

コマンドを実行し、[http://localhost:3000/](http://localhost:3000/)でNext.jsのサイトが表示されれば環境構築成功です

![localhost_3000_.png](%E3%83%A2%E3%82%BF%E3%82%99%E3%83%B3%E3%81%AAJS%E3%83%95%E3%83%AC%E3%83%BC%E3%83%A0%E3%83%AF%E3%83%BC%E3%82%AF%E3%81%BE%E3%81%A8%E3%82%81%E3%81%A6%E3%81%BF%E3%81%9F%20%E3%80%9C%20Next%20js%E7%B7%A8%20%E3%80%9C%203876d852cf7f48f5bfcec7bdaf4c2cf8/localhost_3000_.png)

〜Next.jsでToDoアプリを作ってみよう〜

今回はNext.js+TypeScriptを使用して

簡単なToDoアプリを作成していきます

やること

- ToDo項目の作成
- ToDoの管理

ToDoの進捗状態でのタスク切り替え

やらないこと

- DBへの接続・保存
- ToDoの編集
- 動的なルーティング

作成するディレクトリ構造は以下のようになります

1.Sassのinstall

まず、sassを使ってデザインを作成するのでinstallします

<aside>
npm install sass

</aside>


2.スタイルの作製

作成するcomponentは以下の通りです

pages
 ├── _app.tsx
 ├── componets
 │   ├── Form.tsx
 │   ├── Header.tsx
 │   ├── TodoContents.tsx
 │   └── index.tsx
 └── index.tsx
 public
   └── img
       └── logo.png
 styles
   ├── css
   │   └── reset.css
   └── sass
       ├── _config.scss
       └── style.module.scss

3.
5, {フレームワーク}を使ってみた所感