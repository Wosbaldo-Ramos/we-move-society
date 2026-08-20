package com.wemove.backend.domain.model;

import java.time.LocalDateTime;

public class Activity {

    private Long id;
    private String name;
    private String description;
    private String type; // RUN, JUMP, HIT, RIDE, SWIM
    private LocalDateTime dateTime;
    private String location;
    private Integer maxPlaces;
    private Integer availablePlaces;
    private Double price;
    private String level; // BEGINNER, INTERMEDIATE, ADVANCED, FAMILY

    public Activity() {}

    public Activity(Long id, String name, String description, String type,
                    LocalDateTime dateTime, String location, Integer maxPlaces,
                    Integer availablePlaces, Double price, String level) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.type = type;
        this.dateTime = dateTime;
        this.location = location;
        this.maxPlaces = maxPlaces;
        this.availablePlaces = availablePlaces;
        this.price = price;
        this.level = level;
    }

    public boolean hasAvailablePlaces() {
        return availablePlaces > 0;
    }

    public void reservePlace() {
        if (!hasAvailablePlaces()) {
            throw new IllegalStateException("No hay plazas disponibles");
        }
        this.availablePlaces--;
    }

    // Getters y Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getType() { return type; }
    public void setType(String type) { this.type = type; }

    public LocalDateTime getDateTime() { return dateTime; }
    public void setDateTime(LocalDateTime dateTime) { this.dateTime = dateTime; }

    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }

    public Integer getMaxPlaces() { return maxPlaces; }
    public void setMaxPlaces(Integer maxPlaces) { this.maxPlaces = maxPlaces; }

    public Integer getAvailablePlaces() { return availablePlaces; }
    public void setAvailablePlaces(Integer availablePlaces) { this.availablePlaces = availablePlaces; }

    public Double getPrice() { return price; }
    public void setPrice(Double price) { this.price = price; }

    public String getLevel() { return level; }
    public void setLevel(String level) { this.level = level; }
}
