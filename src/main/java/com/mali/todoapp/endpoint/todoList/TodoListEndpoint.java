package com.mali.todoapp.endpoint.todoList;

import com.mali.todoapp.dto.ProcessResultDTO;
import com.mali.todoapp.dto.TodoListDTO;
import com.mali.todoapp.endpoint.BaseEndpoint;
import com.mali.todoapp.serviceView.todoList.TodoListServiceView;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author mali.sahin
 * @since 10.12.2018.
 */
@RestController
@RequestMapping("/todoList")
public class TodoListEndpoint extends BaseEndpoint {


    @Autowired
    TodoListServiceView todoListService;


    @PostMapping(value = "/")
    public ResponseEntity<ProcessResultDTO> post(@RequestBody TodoListDTO todoListDTO) {

        return null;
    }
}
