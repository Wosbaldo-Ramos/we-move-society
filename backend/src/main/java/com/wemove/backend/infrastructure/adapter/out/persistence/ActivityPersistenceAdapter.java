package com.wemove.backend.infrastructure.adapter.out.persistence;

import com.wemove.backend.domain.model.Activity;
import com.wemove.backend.domain.port.ActivityRepository;
import com.wemove.backend.infrastructure.entity.ActivityEntity;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Component
public class ActivityPersistenceAdapter implements ActivityRepository {

    private final ActivityJpaRepository jpaRepository;

    public ActivityPersistenceAdapter(ActivityJpaRepository jpaRepository) {
        this.jpaRepository = jpaRepository;
    }

    @Override
    public List<Activity> findAll() {
        return jpaRepository.findAll()
                .stream()
                .map(this::toDomain)
                .collect(Collectors.toList());
    }

    @Override
    public Optional<Activity> findById(Long id) {
        return jpaRepository.findById(id).map(this::toDomain);
    }

    @Override
    public Activity save(Activity activity) {
        ActivityEntity entity = toEntity(activity);
        ActivityEntity saved = jpaRepository.save(entity);
        return toDomain(saved);
    }

    @Override
    public void deleteById(Long id) {
        jpaRepository.deleteById(id);
    }

    @Override
    public List<Activity> findByType(String type) {
        return jpaRepository.findByType(type)
                .stream()
                .map(this::toDomain)
                .collect(Collectors.toList());
    }

    private Activity toDomain(ActivityEntity entity) {
        return new Activity(
                entity.getId(),
                entity.getName(),
                entity.getDescription(),
                entity.getType(),
                entity.getDateTime(),
                entity.getLocation(),
                entity.getMaxPlaces(),
                entity.getAvailablePlaces(),
                entity.getPrice(),
                entity.getLevel()
        );
    }

    private ActivityEntity toEntity(Activity domain) {
        ActivityEntity entity = new ActivityEntity();
        entity.setId(domain.getId());
        entity.setName(domain.getName());
        entity.setDescription(domain.getDescription());
        entity.setType(domain.getType());
        entity.setDateTime(domain.getDateTime());
        entity.setLocation(domain.getLocation());
        entity.setMaxPlaces(domain.getMaxPlaces());
        entity.setAvailablePlaces(domain.getAvailablePlaces());
        entity.setPrice(domain.getPrice());
        entity.setLevel(domain.getLevel());
        return entity;
    }
}