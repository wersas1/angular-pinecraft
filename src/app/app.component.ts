import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PineCraft';
  subtitle ='Your MineCraft Experience';

  getUrl()
{
  return "url('https://t00.deviantart.net/JuCPFi3_9OTfeVIzU8DAPYR8_As=/fit-in/500x250/filters:fixed_height(100,100):origin()/pre00/7ba8/th/pre/i/2014/285/5/0/minecraft_stone_brick_simple_texture_wallpaper_by_elbarnzo-d82j2kd.jpg')";
}
}
