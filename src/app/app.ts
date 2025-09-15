import { ChangeDetectorRef, Component, OnInit, signal } from '@angular/core';
import { ObjectVisualizerComponent } from './object-visualizer/object-visualizer.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,                       
  imports: [FormsModule, ObjectVisualizerComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit{
  protected readonly title = signal('Object Visualizer (Remove ; at end of your input json)');
  constructor(private cdr: ChangeDetectorRef) {
  }
  ngOnInit(): void {
    this.updateTree()
  }
  jsonInput: string = `{
  "a": ["b", "c"],
  "b": ["d", "e"],
  "c": ["f", "g"],
  "e": ["h", "i"],
  "f": ["j", "k"]
}
`;
tree = JSON.parse(this.jsonInput);
updateTree() {
  try {
      this.tree = JSON.parse(this.jsonInput);
      // this.tree = { "a": [JSON.parse(this.jsonInput)] };
      this.tree = this.buildNestedTree("a", this.tree);
      console.log(this)
    } catch (err) {
      alert('Invalid JSON');
    }
  }
  buildNestedTree(node: any, tree: any) {
    if (!tree[node]) return node; // leaf node
    let children = tree[node].map((child: any) => this.buildNestedTree(child, tree));
    return { [node]: children };
  }

// Start from the root "a"
}
