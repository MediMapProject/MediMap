package com.medimap.search;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/search")
public class SearchController {

    private final SearchService searchService;

    public SearchController(SearchService searchService) {
        this.searchService = searchService;
    }

    @GetMapping
    public List<SearchDTO> search(@RequestParam String query) {

        query = query.trim();

        if (query == null || query.isBlank()) {
            return List.of();
        }
        return searchService.search(query);
    }
}