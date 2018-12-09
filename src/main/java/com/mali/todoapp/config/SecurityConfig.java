package com.mali.todoapp.config;

/**
 * @author mali.sahin
 * @since 8.12.2018.
 */
/*@Configuration
@EnableAutoConfiguration*/
public class SecurityConfig /*extends WebSecurityConfigurerAdapter*/ {

   /* @Autowired
    DataSource dataSource;

    @Autowired
    public void configAuthentication(AuthenticationManagerBuilder manager) throws Exception {
        manager.jdbcAuthentication()
                .dataSource(dataSource)
                .usersByUsernameQuery("select user_name, user_password from user_def where username=?");
    }

    @Override
    protected  void configure(HttpSecurity http) throws Exception{
        http
                .authorizeRequests()
                .antMatchers("/","/index").permitAll()
                .anyRequest().authenticated()
                .and()
                .formLogin().loginPage("/index").permitAll()
                .and()
                .httpBasic();

        http.exceptionHandling().accessDeniedPage("/403");
    }*/
}
