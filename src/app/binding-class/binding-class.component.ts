import { Component } from '@angular/core';

@Component({
  selector: '[app-binding-class]',
  template:`

<div style="display: flex">
    <div>
      <h1>Heading 1</h1>
      <h1 [class]="success">
        Success text
      </h1>
      <h1 [class]="error">
        error text
      </h1>
      <h1 [class]="primary">
        primary text
      </h1>
      <h1 [class]="normal">
        normal text
      </h1>
      <h1 [class]="multiClass">
        multiClass text
      </h1>

    </div>

    <div>
      <h2>Heading 2</h2>
      <h2 class="{{success}}">
        Success text
      </h2>
      <h2 class="{{error}}">
        error text
      </h2>
      <h2 class="{{primary}}">
        primary text
      </h2>
      <h2 class="{{normal}}">
        normal text
      </h2>
      <h2 class="{{multiClass}}">
        multiClass text
      </h2>

      <h2 class="{{complextext}}">
        complextext text
      </h2>

    </div>
  </div>
  `,
  styles: [`
    .text-success {
      color: darkgreen
    }

    .text-error {
      color: darkred
    }

    .text-primary {
      color: navy
    }

    .text-normal {
      font-style: italic;
    }
    .text-complexity {
      font-style: bold;
      font-size: 18px;
      color: blue;
      font-family: 'Cambria'
    }
  `]

})
export class BindingClassComponent {
  public success = "text-success"
  public error = "text-error"
  public primary = "text-primary"
  public normal = "text-normal"
  public multiClass = { "text-primary":true, "text-normal":true, "text-error":true }
  complextext = "text-complexity"
}

