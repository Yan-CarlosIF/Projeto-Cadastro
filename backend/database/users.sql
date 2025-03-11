create table
	users (
		id serial primary key,
		name varchar(100) not null,
		email text unique not null,
		password varchar(50) not null
	);