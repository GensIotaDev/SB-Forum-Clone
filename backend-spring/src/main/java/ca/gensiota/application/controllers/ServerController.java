package ca.gensiota.application.controllers;

import ca.gensiota.application.controllers.dto.KVPair;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class ServerController {
    private final Map<String, Integer> stats = new HashMap<>(){{
        put("Threads", 0);
        put("Messages", 0);
        put("Members", 0);
        put("Latest member", 0);
        put("Recent bookmarks", 0);
        put("New members today", 0);
        put("New threads today", 0);
        put("New posts today", 0);
    }};

    public ServerController() {

    }

    @GetMapping("/statistics")
    public Collection<KVPair<String,Integer>> getServerStatistics(){
        return stats.entrySet()
                .stream()
                .map((x) -> {
                    return new KVPair<>(x.getKey(), x.getValue());
                })
                .toList();
    }
}
