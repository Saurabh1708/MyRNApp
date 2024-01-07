package com.app.Beer;

import android.util.Log;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;

import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class BeerApiModule extends ReactContextBaseJavaModule {
    ApiService apiService;
    private static final String BASE_URL = "https://api.punkapi.com/v2/";

    BeerApiModule(ReactApplicationContext context) {
        super(context);
        Retrofit retrofit = new Retrofit.Builder()
                .baseUrl(BASE_URL)
                .addConverterFactory(GsonConverterFactory.create())
                .build();

        apiService = retrofit.create(ApiService.class);
    }

    @NonNull
    @Override
    public String getName() {
        return "BeerApiModule";
    }

    @ReactMethod
    public void getBeerListOfBeers(int page, int per_Page, Promise promise) {

        Call<List<Beers>> call = apiService.fetchBeers(page, per_Page);
        call.enqueue(new Callback<>() {
            @Override
            public void onResponse(@NonNull Call<List<Beers>> call, @NonNull Response<List<Beers>> response) {


                if (response.isSuccessful()) {
                    List<Beers> beersList = response.body();
                    WritableArray writableArray = Arguments.createArray();
                    for (Beers beer : beersList) {
                        WritableMap beerMap = new WritableNativeMap();
                        writableArray.pushMap(beerMap);
                    }

                    promise.resolve(writableArray);
                }
                else promise.reject("API_ERROR", "Failed to fetch beers");
            }

            @Override
            public void onFailure(@NonNull Call<List<Beers>> call, Throwable t) {
                promise.reject("API_ERROR", t.getMessage());
            }
        });
    }


}
