import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Comment } from './class/comment';
import { User } from './class/user';
import { FormsModule } from '@angular/forms';

// ユーザー情報を定義（現在のユーザーと別のユーザー）
const CURRENT_USER: User = new User(1, '五十川 洋平');
const ANOTHER_USER: User = new User(2, '竹井 賢治');

// チャットのコメントデータを初期化
const COMMENTS: Comment[] = [
  new Comment(ANOTHER_USER, 'お疲れ様です！'),
  new Comment(ANOTHER_USER, 'お疲れ様です！'),
  new Comment(CURRENT_USER, 'お疲れ様です！'),
  new Comment(CURRENT_USER, 'クライアントからOKが出ました！'),
];

@Component({
  selector: 'ac-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // チャットの履歴に表示するコメントのデータ
  comments = COMMENTS;
  // 送信者の情報として表示する現在のユーザー
  currentUser = CURRENT_USER;

  // チャットのメッセージを格納する変数
  comment = '';

  addComment(comment: string) {
    if (comment) {
      this.comments.push(new Comment(this.currentUser, comment))
    }
  }
  
}
