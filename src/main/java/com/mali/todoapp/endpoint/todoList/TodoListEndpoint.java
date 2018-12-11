package com.mali.todoapp.endpoint.todoList;

import com.mali.todoapp.dto.ProcessResultDTO;
import com.mali.todoapp.dto.TodoListDTO;
import com.mali.todoapp.endpoint.BaseEndpoint;
import com.mali.todoapp.serviceView.todoList.TodoListServiceView;
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
@RequestMapping("/todoList/")
public class TodoListEndpoint extends BaseEndpoint {


    @Autowired
    TodoListServiceView todoListService;


    @PostMapping(value = "")
    public ResponseEntity<ProcessResultDTO> save(@RequestBody TodoListDTO todoListDTO) {

        try {

            TodoListDTO listDTO = todoListService.save(todoListDTO);

            return returnObjectAsProcessResult(listDTO);

        } catch (Exception e) {
            return returnExceptionAsProcessResult(e);

        }
    }

    @GetMapping(value = "{userId}/")
    public ResponseEntity<ProcessResultDTO> findByUserId(@PathVariable("userId") Long userId) {
        try {

            List<TodoListDTO> list = todoListService.findByUserId(userId);

            return returnObjectAsProcessResult(list);

        } catch (Exception e) {
            return returnExceptionAsProcessResult(e);

        }
    }

    @PutMapping(value = "")
    public ResponseEntity<ProcessResultDTO> update(@RequestBody TodoListDTO todoListDTO) {

        try {

            todoListDTO = todoListService.update(todoListDTO);

            return returnObjectAsProcessResult(todoListDTO);

        } catch (Exception e) {
            return returnExceptionAsProcessResult(e);

        }
    }
/*
    @PostMapping(value = "list/userId/{first}/{pageSize}")
    public ResponseEntity<ProcessResultDTO> list(
            @RequestBody TodoListFilterDTO filter,
            @PathVariable("userId") Long userId,
            @PathVariable("first") Long first,
            @PathVariable("pageSize") Long pageSize
    ) {

        filter.userId = userId;
        filter.first = first;
        filter.pageSize = pageSize;
        try {
            List<TodoListDTO> listDTOList = todoListService.findByFilter(filter);

            return returnObjectAsProcessResult(listDTOList);

        } catch (Exception e) {
            return returnExceptionAsProcessResult(e);
        }
    }*/

    @DeleteMapping(value = "{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") Long id) {

        try {

            todoListService.deleteById(id);

            return new ResponseEntity<>(HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);

        }
    }
}
