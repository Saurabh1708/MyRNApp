package com.app.Beer;

import java.util.Arrays;
import java.util.List;

import retrofit2.Call;
import retrofit2.http.GET;
import retrofit2.http.Query;

public interface ApiService {
    @GET("beers")
    Call<List<Beers>> fetchBeers(@Query("page") int page, @Query("per_page") int per_page);
}

