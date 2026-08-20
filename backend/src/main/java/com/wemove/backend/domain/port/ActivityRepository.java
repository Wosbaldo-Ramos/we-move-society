package com.wemove.backend.domain.port;

import com.wemove.backend.domain.model.Activity;
import java.util.List;
import java.util.Optional;

public interface ActivityRepository {

    List<Activity> findAll();
    Optional<Activity> findById(Long id);
    Activity save(Activity activity);
    void deleteById(Long id);
    List<Activity> findByType(String type);
}
