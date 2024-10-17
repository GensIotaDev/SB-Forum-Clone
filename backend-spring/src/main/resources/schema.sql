CREATE TABLE IF NOT EXISTS members(
    id INT GENERATED ALWAYS AS IDENTITY,
    username TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    birthday TIMESTAMP NOT NULL,
    is_enabled BOOLEAN DEFAULT true,
    PRIMARY KEY (id)
);

-- SECURITY

CREATE TABLE IF NOT EXISTS roles(
    id INT GENERATED ALWAYS AS IDENTITY,
    name TEXT DEFAULT 'NONE',
    PRIMARY KEY (id)
);
-- SECURITY RELATIONS
CREATE TABLE IF NOT EXISTS member_roles(
    member_id INT NOT NULL,
    role_id INT NOT NULL,
    PRIMARY KEY (member_id,role_id),
    CONSTRAINT fk_member
        FOREIGN KEY (member_id)
            REFERENCES members(id)
            ON DELETE CASCADE,
    CONSTRAINT fk_role
        FOREIGN KEY (role_id)
            REFERENCES roles(id)
            ON DELETE CASCADE
);

-- CONTENT
CREATE TABLE IF NOT EXISTS forums(
    id INT GENERATED ALWAYS AS IDENTITY,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    thread_count INT DEFAULT 0,
    post_count INT DEFAULT 0,
    parent_id INT REFERENCES forums ON DELETE RESTRICT,
    latest_thread_id INT REFERENCES threads ON DELETE RESTRICT,
    section_id INT REFERENCES tags ON DELETE RESTRICT,
    PRIMARY KEY(id),
    UNIQUE (parent_id, title)
);
CREATE TABLE IF NOT EXISTS threads(
    id INT GENERATED ALWAYS AS IDENTITY,
    title TEXT NOT NULL,
    description TEXT,
    created_on DATE,
    views INt DEFAULT 0,
    latest_post_id INT REFERENCES posts ON DELETE RESTRICT,
    PRIMARY KEY (id)
);
CREATE TABLE IF NOT EXISTS forum_threads(
    forum_id INT NOT NULL,
    thread_id INT NOT NULL,
    PRIMARY KEY (forum_id,thread_id),
    CONSTRAINT fk_forum
        FOREIGN KEY (forum_id)
        REFERENCES forums(id)
        ON DELETE CASCADE,
    CONSTRAINT fk_thread
        FOREIGN KEY (thread_id)
        REFERENCES threads(id)
        ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS tags(
    id INT GENERATED ALWAYS AS IDENTITY,
    value TEXT NOT NULL,
    type TEXT NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE IF NOT EXISTS thread_tags(
      thread_id INT NOT NULL,
      tag_id INT NOT NULL,
      PRIMARY KEY (thread_id,tag_id),
      CONSTRAINT fk_thread
          FOREIGN KEY (thread_id)
          REFERENCES threads(id)
          ON DELETE CASCADE,
      CONSTRAINT fk_tag
          FOREIGN KEY (tag_id)
          REFERENCES tags(id)
          ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS posts(
    id INT GENERATED ALWAYS AS IDENTITY,
    thread_id INT NOT NULL REFERENCES threads ON DELETE RESTRICT,
    member_id INT NOT NULL,
    content text NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT fk_member
        FOREIGN KEY (member_id)
        REFERENCES members(id)
        ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS thread_posts(
    thread_id INT NOT NULL,
    post_id INT NOT NULL,
    PRIMARY KEY (thread_id, post_id),
    CONSTRAINT fk_thread
        FOREIGN KEY (thread_id)
        REFERENCES threads(id)
        ON DELETE CASCADE,
    CONSTRAINT fk_post
        FOREIGN KEY (post_id)
        REFERENCES posts(id)
        ON DELETE CASCADE
);
CREATE TABLE IF NOT EXISTS thread_post_marks(
    thread_id INT NOT NULL,
    post_id INT NOT NULL,
    label TEXT NOT NULL,
    category INT NOT NULL,
    PRIMARY KEY (thread_id, post_id),
    CONSTRAINT fk_thread
        FOREIGN KEY (thread_id)
        REFERENCES threads(id)
        ON DELETE CASCADE,
    CONSTRAINT fk_post
        FOREIGN KEY (post_id)
        REFERENCES posts(id)
        ON DELETE CASCADE
);
CREATE TABLE IF NOT EXISTS member_posts(
   member_id INT NOT NULL,
   post_id INT NOT NULL,
   PRIMARY KEY (member_id, post_id),
   CONSTRAINT fk_member
       FOREIGN KEY (member_id)
       REFERENCES members(id)
       ON DELETE CASCADE,
   CONSTRAINT fk_post
       FOREIGN KEY (post_id)
       REFERENCES posts(id)
       ON DELETE CASCADE
);