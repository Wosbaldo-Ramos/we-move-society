package com.wemove.backend.infrastructure.adapter.out.persistence;

import com.wemove.backend.infrastructure.entity.ActivityEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ActivityJpaRepository extends JpaRepository<ActivityEntity, Long> {
    List<ActivityEntity> findByType(String type);
}