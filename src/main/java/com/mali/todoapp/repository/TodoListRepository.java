package com.mali.todoapp.repository;

import com.mali.todoapp.domain.TodoList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * @author mali.sahin
 * @since 10.12.2018.
 */

@Repository
public interface TodoListRepository extends JpaRepository<TodoList, Long> {

    //TodoList findByDescriptionIsLike
}
