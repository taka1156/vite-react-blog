import { Meta, ComponentStory } from '@storybook/react';
import { ArticleBody, BodyProps } from './ArticleBody';

const defaultArgs: BodyProps = {
  body: `# サンプルテキスト

  ---
  ## 見出しタグ
  # これはH1タグです
  ## これはH2タグです
  ### これはH3タグです
  #### これはH4タグです
  ##### これはH5タグです
  ###### これはH6タグです

  \`\`\`markdown
  # これはH1タグです
  ## これはH2タグです
  ### これはH3タグです
  #### これはH4タグです
  ##### これはH5タグです
  ###### これはH6タグです
  \`\`\`

  ---
  ## 強調(bold, italic)
  *hoge*
  _hoge_
  **hoge**
  __hoge__

  \`\`\`markdown
  *hoge*
  _hoge_
  **hoge**
  __hoge__
  \`\`\`

  ---
  ## 打ち消し
  ~~hoge~~

  \`\`\`~~ hoge ~~\`\`\`

  ---
  ## Disc型
  文頭に「*」「+」「-」をいれるとDisc型になる
  * hoge
      * hoge
  * hoge
  + hoge
      + hoge
  + hoge
  - hoge
      - hoge
  - hoge

  \`\`\`markdown
  * hoge
      * hoge
  * hoge
  + hoge
      + hoge
  + hoge
  - hoge
      - hoge
  - hoge
  \`\`\`

  ---
  ## Decimal型
  1. hoge
      1. hoge
          1. hoge
          1. hoge
      1. hoge
          1. hoge
          1. hoge
  1. hoge
      1. hoge
          1. hoge
          1. hoge
      1. hoge
          1. hoge
          1. hoge
  
  \`\`\`markdown
  1. hoge
      1. hoge
          1. hoge
          1. hoge
      1. hoge
          1. hoge
          1. hoge
  1. hoge
      1. hoge
          1. hoge
          1. hoge
      1. hoge
          1. hoge
          1. hoge
  \`\`\`

  ---
  ## チェックボックス
  - [ ] タスク1
  - [x] タスク2

  \`\`\`markdown
  [ ] タスク1
  [x] タスク2
  \`\`\`

  ---
  ## 引用
  > hogehogehoge
  > ネストされた引用です。
  > hogehogehoge

  \`\`\`markdown
  > hogehogehoge
  > ネストされた引用です。
  > hogehogehoge
  \`\`\`

  ---
  ## リンク
  [ポートフォリオサイト](https://www.taka1156.site)

  \`\`\`markdown
  [ポートフォリオサイト](https://www.taka1156.site)
  \`\`\`

  ---
  ## 画像
  ![markdown](//images.ctfassets.net/ygk38bhnxik1/vj9J9UsQnmBqWi9NGJNqM/5990f9b230aff5138dbf22908045ca1b/markdown.svg "markdown")
  
  \`\`\`markdown
  ![markdown](//images.ctfassets.net/ygk38bhnxik1/vj9J9UsQnmBqWi9NGJNqM/5990f9b230aff5138dbf22908045ca1b/markdown.svg "markdownロゴ")
  \`\`\`

  ---
  ## テーブル記法

  | コンパイル言語 | スクリプト言語| 
  |:-------------:|:-------------:|
  | C/C++         | Ruby          |
  | Java          | PHP           |
  | scala         | Python        |
  | C#            | JavaScript    |
  | Swift         | TypeScript    |

  \`\`\`markdown
  | コンパイル言語 | スクリプト言語| 
  |:-------------:|:-------------:|
  | C/C++         | Ruby          |
  | Java          | PHP           |
  | scala         | Python        |
  | C#            | JavaScript    |
  | Swift         | TypeScript    |
  \`\`\`

  ---
  ## その他
  ### Java

  \`\`\`java
  public class Hello{
    public static void main(String[] args){
      // java
      System.out.println("Hello Java World");
    }
  }
  \`\`\`

  ---
  ### C++
  \`\`\`cpp
   #include <iostream>
  using namespace std;
  int main(void){
     // c++
    cout << "Hello C++ world." << endl;
    return 0;
  }
  \`\`\`

  ---
  ### PHP
  \`\`\`php
  // php
  print "Hello PHP World";
  \`\`\`

  ---
  ### Ruby
  \`\`\`ruby
  # ruby
  puts 'Hello Ruby World'
  \`\`\`

  ---
  ### JavaScript
  \`\`\`javascript
  // javascript
  console.log("Hello JavaScript World");
  \`\`\`
  `
}

export default {
  component: ArticleBody,
  title: 'Molecules/ArticleBody',
} as Meta<typeof ArticleBody>;

const Template: ComponentStory<typeof ArticleBody> = (args: BodyProps) => (
  <ArticleBody {...args} />
);

export const Default = Template.bind({});
Default.args = { ...defaultArgs };
