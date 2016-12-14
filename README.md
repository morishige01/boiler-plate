# How to use?

## npm/gulpの環境が整っている人
本ターミナルで下記コマンドを叩きます。

### 1.githubからファイルを落とす
```
git clone https://github.com/nayucolony/boiler-plate.git
```

### 2.packageをインストールする
```
npm install
```

### 3.gulpを起動する
```
gulp
```

## 実行されること
 - ローカルサーバーが起動
 - ejsのwatchを開始
 - scssのwatchを開始

ローカルサーバーは`http://localhost:8000`を参照。
デフォルトでライブリロードがオンになっています。



gulpを使用するにあたり、ローカルとは別に、global環境にもgulpをインストールする必要があります。
（厳密にはなくても動かす方法がありますが、あくまで公式の推奨事項に則って説明します。）
ターミナルを触ったことがない人も、GIFアニメを見ながらgulp環境を作っていきましょう。

## npmもgulpも入っていない人
以下の記述にしたがって環境構築を行いましょう（Mac向け）

## 流れ
1.npmのインストール
2.gulpのインストール

## npmのインストール

### 1.ターミナルを開く

![](/readme-assets/npm-install/terminal-open.gif)

### 2.npm(node package maneger)がインストールされているかをチェック
ターミナルで以下のコマンドを叩きます。

```
npm -v
```

`3.10.9`のように数字が表示されたらokです。
それが今現在インストールされているnpmのバージョンです。

![](/readme-assets/npm-install/npm-v-success.gif)

## 数字が出なかった場合

npmがインストールされていません。
node.jsをインストールするとnpmが使えるようになるので、インストールします。

### 1.下記のサイトのにアクセス
[node.js](https://nodejs.org/ja/)

### 2.v6.9.2 LTS 推奨版(2016/12/13時点)をクリック
※「この種類のファイルは〜」という警告が出ることがありますが自己責任で保存。

### 3.保存したファイルをクリックしてインストール
言われるがままにインストールしていきましょう。

![](/readme-assets/npm-install/node-install.gif)
（途中、続ける、を押していないように見えますが、押してます）


ここまでやったらターミナルで以下のコマンドを叩きます。

```
npm -v
```

`3.10.9`のように数字が表示されたらokです。
それが今現在インストールされているnpmのバージョンです。

![](/readme-assets/npm-install/npm-v-success.gif)

## gulpのインストール
いろいろな手法がありますが、gulp公式の推奨する方法で「gulp-cli」というものをインストールします。
※自己責任のもとでお願いいたします。


### 1.gulpがインストールされているかをチェック
ターミナルで以下のコマンド叩きます。
```
gulp -v
```

`CLI version 1.x.x`のような表示が出た人は、gulp-cliがインストールされています。

gulpをインストールするのが初めての人は以下のようになると思います。
![](/readme-assets/gulp-install/gulp-v-false.gif)
これらの人は、3にすすみます。

また、`CLI version 3.x.x`のような表示が出た場合、古いバージョンのgulpがグローバルにインストールされてしまっているので、アンインストールのち改めてインストールを行う必要があります。2に進みます。

### 2.古いgulpをアンインストール

下記のコマンドを叩きます。

```
sudo npm uninstall -g gulp
```

古いgulpがアンインストールされます。

![](/readme-assets/gulp-install/gulp-uninstall-global.gif)

### 3.gulp-cliをインストール
下記のコマンドを叩きます。

```
sudo npm install -g gulp-cli
```

成功した場合は下記のようになります。
![](/readme-assets/gulp-install/gulp-cli-install-global.gif)

また、2で古いgulpをアンインストールしてgulp-cliのインストールを行っている場合、下記のようなエラーが出る場合があります。

```
nayucolony:~ demo$ sudo npm install -g gulp-cli
/usr/local/bin/gulp -> /usr/local/lib/node_modules/gulp-cli/bin/gulp.js
npm ERR! Darwin 15.6.0
npm ERR! argv "/usr/local/bin/node" "/usr/local/bin/npm" "install" "-g" "gulp-cli"
npm ERR! node v6.9.2
npm ERR! npm  v3.10.9
npm ERR! path /usr/local/share/man/man1/gulp.1
npm ERR! code EEXIST

npm ERR! Refusing to delete /usr/local/share/man/man1/gulp.1: ../../../lib/node_modules/gulp/gulp.1 symlink target is not controlled by npm /usr/local
npm ERR! File exists: /usr/local/share/man/man1/gulp.1
npm ERR! Move it away, and try again.

npm ERR! Please include the following file with any support request:
npm ERR!     /Users/demo/npm-debug.log
nayucolony:~ demo$ gulp -v
-bash: /usr/local/bin/gulp: No such file or directory
nayucolony:~ demo$
```

これは、アンインストールの際に削除できないファイルがあったことにより競合が起こり発生するエラーです。

下記のコマンドで競合ファイルを削除する必要があります
```
sudo rm /usr/local/share/man/man1/gulp.1
```

その後、再度下記のコマンドを実行しましょう
```
sudo npm install -g gulp-cli
```
成功した場合は下記のようになります。
![](/readme-assets/gulp-install/gulp-cli-install-global.gif)

これで、gulpがglobalにインストールされました。
