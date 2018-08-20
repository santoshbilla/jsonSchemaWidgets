import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schema',
  templateUrl: './schema.component.html',
  styleUrls: ['./schema.component.css']
})
export class SchemaComponent implements OnInit {
yourJsonSchema : any;
  constructor() { }

  ngOnInit() {
    // Define the JSON Schema as an object because [schema] in view takes an object
    this.yourJsonSchema = {
      "schema": {
        "title": "Comment",
        "type": "object",
        "required": [ "comments" ],
        "properties": {
          "comments": {
            "type": "array",
            "maxItems": 2,
            "items": {
              "type": "object",
              "properties": {
                "name": {
                  "title": "Name",
                  "type": "string"
                },
                "email": {
                  "title": "Email",
                  "type": "string",
                  "pattern": "^\\S+@\\S+$",
                  "description": "Email will be used for evil."
                },
                "spam": {
                  "title": "Spam",
                  "type": "boolean",
                  "default": true
                },
                "comment": {
                  "title": "Comment",
                  "type": "string",
                  "maxLength": 20,
                  "validationMessage": "Don't be greedy!"
                }
              },
              "required": [ "name", "comment" ]
            }
          }
        }
      },
      "form": [
        { "type": "help",
          "helpvalue": "<h4>Array Example</h4><p>Try adding a couple of forms, reorder by drag'n'drop.</p>"
        },
        { "key": "comments",
          "add": "New",
          "style": { "add": "btn-success" },
          "items": [
            "comments[].name",
            "comments[].email",
            { "title": "Yes I want spam.",
              "type": "checkbox",
              "key": "comments[].spam",
              "condition": "model.comments[arrayIndex].email"
            },
            { "type": "textarea",
              "key": "comments[].comment"
            }
          ]
        },
        { "title": "OK",
          "type": "submit",
          "style": "btn-info"
        }
      ]
    };
 }

}
