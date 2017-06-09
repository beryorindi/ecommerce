drop table if exists wristwatch;

create table wristwatch (
    id varchar(255) not null,
    name varchar(100) not null,
    price varchar(20) not null,
    type_id int not null,
    strap_id int not null,
    color_id int not null,
    detail text not null,
    submit_date date not null,
    likes int,
    discount int,
    image_id int,
    primary key (id)
);