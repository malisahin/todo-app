package com.mali.todoapp.endpoint.todoItem;

import com.mali.todoapp.dto.ProcessResultDTO;
import com.mali.todoapp.dto.TodoItemDTO;
import com.mali.todoapp.endpoint.BaseEndpoint;
import com.mali.todoapp.serviceView.todoItem.TodoItemServiceView;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @author mali.sahin
 * @since 10.12.2018.
 */
@RestController
@RequestMapping(value = "todoItem/")
public class TodoItemEndpoint extends BaseEndpoint {

    @Autowired
    TodoItemServiceView todoItemServiceView;

    @PostMapping(value = "")
    public ResponseEntity<ProcessResultDTO> save(@RequestBody TodoItemDTO itemDTO) {

        try {

            TodoItemDTO todoItemDTO = todoItemServiceView.save(itemDTO);

            return returnObjectAsProcessResult(todoItemDTO);

        } catch (Exception e) {
            return returnExceptionAsProcessResult(e);

        }
    }

    @GetMapping(value = "{listId}/")
    public ResponseEntity<ProcessResultDTO> findByListId(@PathVariable("listId") Long listId) {
        try {

            List<TodoItemDTO> list = todoItemServiceView.findByListId(listId);

            return returnObjectAsProcessResult(list);

        } catch (Exception e) {
            return returnExceptionAsProcessResult(e);

        }
    }

    @PutMapping(value = "")
    public ResponseEntity<ProcessResultDTO> update(@RequestBody TodoItemDTO itemDTO) {

        try {

            itemDTO = todoItemServiceView.update(itemDTO);

            return returnObjectAsProcessResult(itemDTO);

        } catch (Exception e) {
            return returnExceptionAsProcessResult(e);

        }
    }


    @DeleteMapping(value = "{id}/")
    public ResponseEntity<Void> delete(@PathVariable("id") Long id) {

        try {

            todoItemServiceView.deleteById(id);

            return new ResponseEntity<>(HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);

        }
    }

}
