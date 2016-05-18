package us.kulba;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import us.kulba.stencil.StencilApplication;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = StencilApplication.class)
@WebAppConfiguration
public class StencilApplicationTests {

    @Test
    public void contextLoads() {
    }

}
