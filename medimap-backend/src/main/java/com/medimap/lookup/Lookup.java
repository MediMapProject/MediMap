package com.medimap.lookup;

import com.medimap.common.BaseEntity;
import jakarta.persistence.*;

@Entity
@Table(name = "lookup")
public class Lookup extends BaseEntity {

    public Lookup() {
    }

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private LookupCategory category;

    @Column(nullable = false)
    private String name;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "parent_id")
    private Lookup parent;

    public LookupCategory getCategory() {
        return category;
    }

    public void setCategory(LookupCategory category) {
        this.category = category;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Lookup getParent() {
        return parent;
    }

    public void setParent(Lookup parent) {
        this.parent = parent;
    }
}