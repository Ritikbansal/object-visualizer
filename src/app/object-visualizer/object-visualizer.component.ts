import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-object-visualizer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './object-visualizer.component.html',
  styleUrls: ['./object-visualizer.component.css']
})
export class ObjectVisualizerComponent implements OnInit, OnChanges {
  @Input() node: any;
  @Input() level: number = 0;
  ngOnInit(): void {
    console.log(this.node)
  }
  isString(value: any): boolean {
    return typeof value === 'string';
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['node']) {
      console.log('Node input changed:', this.node);
    }
    if (changes['level']) {
      console.log('Level input changed:', this.level);
    }
  }
  isObject(value: any): boolean {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
  }

  isArray(value: any): boolean {
    return Array.isArray(value);
  }
  
  isIterable(value: any): boolean {
    return Array.isArray(value);
  }
}
