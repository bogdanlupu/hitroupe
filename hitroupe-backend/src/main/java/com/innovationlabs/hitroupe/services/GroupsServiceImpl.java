package com.innovationlabs.hitroupe.services;

import com.innovationlabs.hitroupe.models.Group;
import com.innovationlabs.hitroupe.repositories.GroupsRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class GroupsServiceImpl implements GroupsService {
    @Autowired
    private GroupsRepository repository;

    @Override
    public Group save(Group entity) {
        repository.save(entity);
        return entity;
    }

    @Override
    public List<Group> getAll() {
        return (List<Group>) repository.findAll();
    }

    @Override
    public Group getById(String id) {
        return null;
    }

    @Override
    public void delete(String id) {

    }
}
