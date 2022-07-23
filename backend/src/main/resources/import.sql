INSERT INTO tb_user (username, email, password) VALUES ('Ana Blue', 'ana@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (username,  email, password) VALUES ('Bob Brown', 'bob@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (username,  email, password) VALUES ('Maria Green', 'maria@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (username,  email, password) VALUES ('Billy Grey', 'billy@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');


INSERT INTO tb_role (authority) VALUES ('ROLE_SELLER');
INSERT INTO tb_role (authority) VALUES ('ROLE_MANAGER');
INSERT INTO tb_role (authority) VALUES ('ROLE_ADMIN');

INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 2);
INSERT INTO tb_user_role (user_id, role_id) VALUES (3, 3);
INSERT INTO tb_user_role (user_id, role_id) VALUES (4, 1);

INSERT INTO tb_sale(user_seller_id,visited,deals,amount,date) VALUES (1,121,67,18196.0,'2022-06-16');
INSERT INTO tb_sale(user_seller_id,visited,deals,amount,date) VALUES (1,26,14,4255.0,'2022-06-14');
INSERT INTO tb_sale(user_seller_id,visited,deals,amount,date) VALUES (1,55,42,13249.0,'2022-06-14');
INSERT INTO tb_sale(user_seller_id,visited,deals,amount,date) VALUES (4,73,65,20751.0,'2022-06-10');
INSERT INTO tb_sale(user_seller_id,visited,deals,amount,date) VALUES (4,47,25,7318.0,'2022-06-04');
INSERT INTO tb_sale(user_seller_id,visited,deals,amount,date) VALUES (4,72,60,15608.0,'2022-06-03');