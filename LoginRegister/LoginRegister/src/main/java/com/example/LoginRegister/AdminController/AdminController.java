package com.example.LoginRegister.AdminController;
import com.example.LoginRegister.Dto.AdminDTO;
import com.example.LoginRegister.Dto.LoginDTO;
import com.example.LoginRegister.Service.AdminService;
import com.example.LoginRegister.response.LoginResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("api/v1/admin")
public class AdminController {


    @Autowired
    private AdminService adminService;


    @PostMapping(path = "/save")
    public String saveAdmin(@RequestBody AdminDTO adminDTO)
    {
        String id = adminService.addAdmin(adminDTO);
        return id;
    }

    @PostMapping(path = "/login")
    public ResponseEntity<?> loginAdmin(@RequestBody LoginDTO loginDTO)
    {
        LoginResponse loginResponse = adminService.loginAdmin(loginDTO);
        return ResponseEntity.ok(loginResponse);
    }
}