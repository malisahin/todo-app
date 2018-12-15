
create schema if not exists  todoapp;


commit;

CREATE TABLE IF NOT EXISTS todoapp.todo_item (
	ID int4 NOT NULL,
	LIST_ID int4 NOT NULL,
	EXPLANATION varchar(500) NOT NULL,
	cre_date date NOT NULL,
	upd_date date NULL,
	CONSTRAINT todo_item_pkey PRIMARY KEY (id)
);

commit;

CREATE TABLE IF NOT EXISTS todoapp.TODO_LIST (
	ID int4 NOT NULL,
	USER_ID int4 NOT NULL,
	LIST_NAME varchar(50) NOT NULL,
	DESCRIPTION varchar NULL,
	cre_date date NOT NULL,
	upd_date date NULL,
	CONSTRAINT todo_list_pkey PRIMARY KEY (id)
);

commit;

CREATE TABLE IF NOT EXISTS todoapp.USER_DEF (
	ID int4 NOT NULL,
	USER_NAME varchar(50) NOT NULL,
	EMAIL varchar(50) NOT NULL,
	USER_PASSWORD varchar(255) NOT NULL,
	cre_date date NOT NULL,
	upd_date date NULL,
	CONSTRAINT user_def_pkey PRIMARY KEY (id)
);

commit;