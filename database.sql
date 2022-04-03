create TABLE newListItem(
    id SERIAL PRIMARY KEY,
    active VARCHAR(255),
    price VARCHAR(255),
    name_car VARCHAR(255),
    characteristics VARCHAR(255),
    url_img VARCHAR(2055),
    characteristics_id INTEGER,
    FOREIGN KEY(characteristics_id) REFERENCES characteristics(id)
);
insert into newListItem(active, price, name_car, url_img)values('false', 'от 1 915 000 ₽', 'Skoda', 'https://s3-alpha-sig.figma.com/img/18ae/42d6/0e69104056641504e2747ac9c774aedb?Expires=1649635200&Signature=OnvUP6PBkepTjd2mxN9cm9wqt7lOzxR0tM4c~7m7TJqILMCrmWTh1LvqKQRvnb6pt6GGevY9Ec3yzrbh6le~YVep0jhZ7yCCt6JnLgG-sWYgsyuZ0nkZi14-ZWusfCLvuKDUmzgxQmeXZNzl92itu3owwu~6TNvts~55w-a7p1uvAXuNVNdrRfDvsBWLHkrJNGtXmglTJe-Mgnt~UiZ9lgGtN3TGeL-cDVPpVzV~tWlPYHkx6tVxfL7fkGWZGfe2b6LALL2UMR3Uprx2ODNnjv34AQnV9WL7LgIe63sj2rCXB1omO1En~KcHXVphCdZN0YSbLLubzAii1VRencrSHg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA');

create TABLE characteristics(
    id SERIAL PRIMARY KEY,
    power VARCHAR(255),
    petrol VARCHAR(255),
    speed VARCHAR(255),
    sec VARCHAR(255)
);
insert into characteristics(power, petrol, speed, sec)values('115 л.с.','1.3 л/км','159 км/ч','11,3 c.');



