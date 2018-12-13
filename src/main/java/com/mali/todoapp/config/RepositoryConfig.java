package com.mali.todoapp.config;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;

/**
 * @author mali.sahin
 * @since 11.12.2018.
 */
@EnableJpaAuditing
@EnableJpaRepositories(basePackages = {"com.mali.todoapp.repository"})
@EntityScan("com.mali.todoapp.domain")
@EnableTransactionManagement
@Configuration
public class RepositoryConfig {
}
