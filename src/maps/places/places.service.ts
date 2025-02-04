import { Injectable } from '@nestjs/common';
import {
  Client as GoogleMapsClient,
  PlaceInputType,
} from '@googlemaps/google-maps-services-js';

@Injectable()
export class PlacesService {
  constructor(private readonly googleMapsClient: GoogleMapsClient) {}
  async findPlaces(text: string) {
    const { data } = await this.googleMapsClient.findPlaceFromText({
      params: {
        input: text,
        inputtype: PlaceInputType.textQuery,
        key: process.env.GOOGLE_MAPS_API_KEY,
        fields: ['place_id', 'formatted_address', 'geometry', 'name'],
      },
    });
    return data;
  }
}
