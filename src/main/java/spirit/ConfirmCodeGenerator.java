package spirit;

import java.util.Random;

import org.springframework.context.annotation.Configuration;
@Configuration
public class ConfirmCodeGenerator {
	public String getConfirmationCode() {
		String chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
		StringBuilder code = new StringBuilder();
		Random rnd = new Random();
		while (code.length() < 5) {
			int index = (int) (rnd.nextFloat() * chars.length());
			code.append(chars.charAt(index));
		}
		String strCode = code.toString();
		return strCode;
	}
}
