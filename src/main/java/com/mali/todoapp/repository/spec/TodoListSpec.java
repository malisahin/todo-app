package com.mali.todoapp.repository.spec;

import com.mali.todoapp.domain.TodoList;
import com.mali.todoapp.dto.TodoListFilterDTO;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

/**
 * @author mali.sahin
 * @since 11.12.2018.
 */
public class TodoListSpec implements Specification<TodoList> {

    private TodoListFilterDTO filter;

    @Override
    public Predicate toPredicate
            (Root<TodoList> root, CriteriaQuery<?> query, CriteriaBuilder builder) {

        return builder.and(
                builder.equal(root.get("id"), filter.id),
                builder.equal(root.get("userId"), filter.userId),
                builder.like(root.get("name"), filter.name),
                builder.like(root.get("description"), filter.description),
                builder.greaterThanOrEqualTo(root.get("creDate"), filter.creDateStart),
                builder.lessThan(root.get("creDate"), filter.creDateEnd)
        );
    }

    @Override
    public Specification<TodoList> and(Specification<TodoList> other) {

        return null;
    }

    @Override
    public Specification<TodoList> or(Specification<TodoList> other) {
        return null;
    }

    public TodoListSpec setFilter(TodoListFilterDTO filter) {
        this.filter = filter;
        return this;
    }
}
