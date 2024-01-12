import {FormBuilder} from '@angular/forms';
import { TodoFormComponent } from './todo-form.component'; 

describe('TodoFormComponent', () => {
  var component: TodoFormComponent; 

  beforeEach(() => {
    component=new TodoFormComponent();
  });

  it('should create a form with 2 controls', () => {
    expect(component.form.contains('name')).toBeTruthy();
    expect(component.form.contains('email')).toBeTruthy();
  });

  it('should validate name input', () => {
    expect(component.form.controls['name'].valid).toBeFalsy();
  });

  it('should validate email input', () => {
    expect(component.form.controls['email'].valid).toBeFalsy();
  });
  

});