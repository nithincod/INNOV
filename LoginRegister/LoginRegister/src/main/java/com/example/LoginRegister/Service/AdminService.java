package com.example.LoginRegister.Service;

import com.example.LoginRegister.Dto.AdminDTO;
import com.example.LoginRegister.Dto.LoginDTO;
import com.example.LoginRegister.response.LoginResponse;

public interface AdminService {
    String addAdmin(AdminDTO adminDTO);

    LoginResponse loginAdmin(LoginDTO loginDTO);


}