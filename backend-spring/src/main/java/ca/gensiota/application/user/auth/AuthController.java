package ca.gensiota.application.user.auth;

import ca.gensiota.application.models.dtos.LoginUserDto;
import ca.gensiota.application.models.dtos.RegisterUserDto;
import ca.gensiota.application.user.UserService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.context.SecurityContextHolderStrategy;
import org.springframework.security.web.context.HttpSessionSecurityContextRepository;
import org.springframework.security.web.context.SecurityContextRepository;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class AuthController {

    private final UserService userService;
    private final AuthenticationManager authManager;
    private final SecurityContextRepository securityContextRepo = new HttpSessionSecurityContextRepository();
    private final SecurityContextHolderStrategy securityContextHolderStrategy = SecurityContextHolder.getContextHolderStrategy();

    Logger logger = LoggerFactory.getLogger(AuthController.class);

    public AuthController(AuthenticationManager authManager, UserService userService) {
        this.authManager = authManager;
        this.userService = userService;
    }

    @PostMapping("/login")
    public ResponseEntity<Long> login(@Valid @RequestBody LoginUserDto loginUser, HttpServletRequest request, HttpServletResponse response){
        var token = UsernamePasswordAuthenticationToken.unauthenticated(loginUser.getUsername(), loginUser.getPassword());
        var auth = this.authManager.authenticate(token);

        var context = securityContextHolderStrategy.createEmptyContext();
        context.setAuthentication(auth);
        securityContextHolderStrategy.setContext(context);

        securityContextRepo.saveContext(context, request, response);
        UserAO user = (UserAO)auth.getPrincipal();
        return ResponseEntity.ok(user.id);
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@Valid @RequestBody RegisterUserDto registerUser, BindingResult result){
        if(result.hasErrors()){
            return new ResponseEntity<>(result.toString(), HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<String>("Passed 1", HttpStatus.OK);
    }
}

