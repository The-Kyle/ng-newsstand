import { Component, OnInit } from "@angular/core";
import { NewsService } from "../services/news.service";

@Component({
  selector: "app-headlines",
  templateUrl: "./headlines.component.html",
  styleUrls: ["./headlines.component.scss"]
})
export class HeadlinesComponent implements OnInit {
  categories = [
    "World",
    "Canada",
    "Business",
    "Technology",
    "Entertainment",
    "Sports",
    "Science",
    "Korea",
    "IBM"
  ];
  news: any;

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.getCategoryData(this.categories[0]);
  }

  onGetCategoryData(category) {
    console.log(category);
    this.getCategoryData(category);
  }

  getCategoryData(category) {
    this.newsService
      .getData(`everything?q=${category.toLowerCase()}`)
      .subscribe(data => {
        this.news = data;
      });
  }
}
