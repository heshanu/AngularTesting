import { TodosComponent } from './todos.component'; 
import { TodoService } from './todo.service'; 
//import { Http } from '@angular/http';
//import  {RxJs}

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);

  });

  it('should set todo item returned from service', () => {
    
    let todos = [
      { id: 1, name: 'test1' },
      { id: 2, name: 'test2' },
      { id: 3, name: 'test3' },
    ];

    spyOn(service, 'getTodos').and.callFake(() => {
      return Observable.from([todos]);
      component.ngOnInit();
      //expect(component.todos.length).toBe(3);
      // expects(component.todos.length).toBeGreaterThan(0);
      //expects(component.todos).toBe(todos);
    });
  });
});