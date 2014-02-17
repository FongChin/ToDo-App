# Simple ToDo Apps

Run the following on both development and test environments.

```rake db:create:all```
```rake db:migrate```


Go To [http://localhost:3000/specs](http://localhost:3000/specs) to run tests

## backbone files
- [/app/assets/javascripts/models/task.js](/app/assets/javascripts/models/task.js)
- [/app/assets/javascripts/routers/tasks_router.js](/app/assets/javascripts/routers/tasks_router.js)
- [/app/assets/javascripts/views/task_form.js](/app/assets/javascripts/views/task_form.js)
- [/app/assets/javascripts/views/tasks_index.js](/app/assets/javascripts/views/tasks_index.js)

## spec files
- [/spec/models/task_spec.rb](/spec/models/task_spec.rb)
- [/spec/javascripts/models/task_spec.js](/spec/javascripts/models/task_spec.js)
- [/spec/javascripts/views/tasks_index_spec.js](/spec/javascripts/views/tasks_index_spec.js)
- [/spec/javascripts/views/task_form.js](/spec/javascripts/views/task_form_spec.js)
- [/spec/javascripts/tasks_collection_spec.js](/spec/javascripts/collections/tasks_collection_spec.js)