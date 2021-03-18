package com.mexfc.restapi.service;

import com.mexfc.restapi.data.model.User;
import com.mexfc.restapi.data.repository.UserRepository;
import com.mexfc.restapi.service.request.ReqBody;
import com.mexfc.restapi.service.response.ResBody;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/")
public class HelloWorld {
    private final UserRepository userRepository;

    public HelloWorld(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @RequestMapping(method = RequestMethod.GET)
    public String index() {
        User f = new User();
        f.setName("Benyamin");
        userRepository.save(f);
        return "User Created";
    }


    @RequestMapping(method = RequestMethod.POST)
    @ResponseBody
    public ResBody post(@RequestBody ReqBody info) {
        return new ResBody(info.getName()+"Hi");
    }
    /*@RequestMapping(method = RequestMethod.POST)
    public String post(HttpServletRequest request, HttpServletResponse response, Model model) throws IOException {
        //Scanner s = new Scanner(request.getInputStream(), "UTF-8").useDelimiter("\\A");
        //return s.hasNext() ? s.next() : "";
        //return request.getAttribute("value1").toString();
         //return request.getParameter("value1"); //param in link
    }*/





}







