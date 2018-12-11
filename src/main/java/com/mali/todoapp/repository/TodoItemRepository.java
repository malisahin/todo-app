package com.mali.todoapp.repository;

import com.mali.todoapp.domain.TodoItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @author mali.sahin
 * @since 10.12.2018.
 */
@Repository
public interface TodoItemRepository extends JpaRepository<TodoItem, Long> {
    List<TodoItem> findByListId(Long listId);

   /* @Transactional
    List<TodoItem> findByListId(Long listId);*/
}
