package com.mali.todoapp.repository;

import com.mali.todoapp.domain.TodoList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @author mali.sahin
 * @since 10.12.2018.
 */

@Repository
public interface TodoListRepository extends JpaRepository<TodoList, Long>, JpaSpecificationExecutor<TodoList> {
    List<TodoList> findByUserId(Long userId);

    //TodoList findByDescriptionIsLike
}
