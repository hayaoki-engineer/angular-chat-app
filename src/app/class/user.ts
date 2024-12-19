export class User {
  // ユーザーのイニシャルを格納する変数
  initial: string;
  
  constructor(public uid: number, public name: string) {
    // ユーザーの名前からイニシャルを取得して、initialに格納
    this.initial = name.slice(0, 1);
  }
}
