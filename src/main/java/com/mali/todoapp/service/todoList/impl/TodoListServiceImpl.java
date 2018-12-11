package com.mali.todoapp.service.todoList.impl;

import com.mali.todoapp.domain.TodoList;
import com.mali.todoapp.repository.TodoListRepository;
import com.mali.todoapp.service.todoList.TodoListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import java.util.List;
import java.util.Optional;

/**
 * @author mali.sahin
 * @since 10.12.2018.
 */
@Service
public class TodoListServiceImpl implements TodoListService {

    EntityManager entityManager;

    @Autowired
    private TodoListRepository listRepository;

    @Override
    public TodoList save(TodoList list) {
        return listRepository.save(list);
    }


    @Override
    public List<TodoList> findByUserId(Long userId) {
        return listRepository.findByUserId(userId);
    }

    @Override
    public Optional<TodoList> findById(Long id) {
        return listRepository.findById(id);
    }

    /*@Override
    public Page<TodoList> findByFilter(TodoListFilterDTO filter) {
       return listRepository.findAll(new TodoListSpec().setFilter(filter), PageRequest.of(filter.pageSize, filter.first, Sort.by("creDate"), Sort.Direction.ASC));
    }*/

    @Override
    public void deleteById(Long id) {
        listRepository.deleteById(id);
    }
}
