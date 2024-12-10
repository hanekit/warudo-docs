---
sidebar_position: 10
---

# 衣装とアクセサリーの切り替え

多くのキャラクターモデルには、さまざまな衣装やアクセサリー用に複数のメッシュがあります。このチュートリアルでは、ホットキーを使用してこれらのメッシュをオン/オフする方法を紹介します。

<div style={{width: '100%'}} className="video-box"><video controls loop src="/jp/doc-img/toggle-meshes.mp4" /></div>
<p class="img-desc">ホットキーでキャラクターメッシュを切り替える</p>

## メッシュの切り替え {#toggling-meshes}

さっそく始めましょう。まず、新しいブループリントを作成しましょう。[はじめてのブループリント作成](https://docs.warudo.app/jp/docs/blueprints/understanding-blueprints)チュートリアルと同様に、 「**キーボードボタンを押したとき(On Keystroke Pressed)**」ノードを追加します。ここではホットキーを **Ctrl+Shift+J** （J は「ジャケット」の意）に設定しますが、好きなキーを使用できます。

![](/doc-img/jp-blueprint-toggle-meshes-1.png)

次に、「**キャラクターメッシュの切り替え**」ノードを追加します（ノードの名前がその機能を表していますね）。これをブループリントに追加し、以下のようにノードを接続します：

![](/doc-img/jp-blueprint-toggle-meshes-2.png)

**キャラクター**ドロップダウンから対象キャラクターを選択します。次に、**+** ボタンをクリックして**メッシュ**リストに新しい要素を追加し、切り替えるメッシュを選択します。今回は、キャラクターのジャケットを切り替えるため、「jacket」メッシュを選択します。このリストには、好きな数のメッシュを追加できます。

:::info
[VRoid Studio](https://vroid.com/en/studio)でエクスポートされたモデルには、`Body`や`Face`など限られたメッシュしかないことに注意してください。より詳細なモデルは、キャラクターの服、アクセサリー、しっぽ、動物の耳などを個別のメッシュに分割することが多いです。切り替える衣装やアクセサリーがない場合は、このチュートリアルをスキップするか、まずは動作確認のためBodyのメッシュを切り替えてみてください！
:::

なんと、設定は以上です！これで **Ctrl+Shift+J** を押せば、キャラクターのジャケット表示のオン/オフを切り替えることができます。

## コピー&ペースト {#copy--paste}

ヘッドホンを切り替えるホットキーも設定してみましょう。ノードを再度ドラッグする代わりに、既存のノードをコピー＆ペーストします。**マウスの右ボタン**を押しながらノードの周りにボックスをドラッグして、以下のように選択します：

![](/doc-img/jp-blueprint-toggle-meshes-3.png)

次に、**Ctrl+C** でノードをコピーし、**Ctrl+V** でペーストします。ノードはマウスカーソルの位置にペーストされます。ここではホットキーを **Ctrl+Shift+H**（Hは「ヘッドホン」の意）に変更し、ドロップダウンから「headphones」メッシュを選択していますが、もちろん好きなメッシュを設定できます。

![](/doc-img/jp-blueprint-toggle-meshes-4.png)

これで、**Ctrl+Shift+H** を押すと、キャラクターのヘッドフォン表示のオン/オフ切り替えができます。

## イベントノード {#event-nodes}

「キーボードボタンを押したとき」のようなノードは、**イベントノード**と呼ばれます。イベントノードには**Enter**フロー入力がないため、任意のトリガーを設定することはできません。このノードでは、ホットキーを押したとき自動的にWarudoによってトリガーされます。

他のイベントノードもあります。例えば、「**YouTube生放送がSuper Chatを受信したとき(On YouTube Super Chat Received)**」ノードです。WarudoをYouTubeストリームに接続している場合、このノードはスーパーチャットを受け取ったときにトリガーされます。以下の例では、「**YouTube生放送がSuper Chatを受信したとき**」ノードを使用して、スーパーチャットを受け取ったときにキャラクターのジャケットを切り替えています。

![](/doc-img/jp-blueprint-toggle-meshes-5.png)

この「もしXなら、Yする」という概念がブループリントの基礎です。「X」はホットキーを押す、スーパーチャットを受け取る、といったイベントで、「Y」はキャラクターを踊らせたり、[ラグドール化](../../assets/character#ragdoll)したりするような様々な面白いインタラクションです。続くチュートリアルで、実際にどのようなインタラクションが実現できるかを見ていきましょう！

<AuthorBar authors={{
  creators: [
    {name: 'HakuyaTira', github: 'TigerHix'},
  ],
  translators: [
    {name: '星影月夜', github: 'unsolublesugar'},
  ],
}} />