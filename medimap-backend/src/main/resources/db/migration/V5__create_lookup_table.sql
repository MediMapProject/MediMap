CREATE TABLE lookup (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    parent_id UUID,

    category VARCHAR(50) NOT NULL,

    name VARCHAR(100) NOT NULL,

    CONSTRAINT fk_lookup_parent
        FOREIGN KEY (parent_id)
        REFERENCES lookup(id)
        ON DELETE RESTRICT
);

CREATE INDEX idx_lookup_category
ON lookup(category);

CREATE INDEX idx_lookup_parent
ON lookup(parent_id);