import Serializer from "ember-data/serializers/rest";
import DS from 'ember-data';

export default Serializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    teams: { embedded: "always" }
  }
});
