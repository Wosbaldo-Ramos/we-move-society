package com.wemove.backend.application.service;

import com.wemove.backend.domain.model.Activity;
import com.wemove.backend.domain.port.ActivityRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ActivityService {

    private final ActivityRepository activityRepository;

    public ActivityService(ActivityRepository activityRepository) {
        this.activityRepository = activityRepository;
    }

    public List<Activity> getAllActivities() {
        return activityRepository.findAll();
    }

    public Optional<Activity> getActivityById(Long id) {
        return activityRepository.findById(id);
    }

    public Activity createActivity(Activity activity) {
        return activityRepository.save(activity);
    }

    public Activity updateActivity(Long id, Activity activity) {
        activity.setId(id);
        return activityRepository.save(activity);
    }

    public void deleteActivity(Long id) {
        activityRepository.deleteById(id);
    }

    public Activity reservePlace(Long id) {
        Activity activity = activityRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Actividad no encontrada"));
        activity.reservePlace();
        return activityRepository.save(activity);
    }

    public List<Activity> getActivitiesByType(String type) {
        return activityRepository.findByType(type);
    }
}
