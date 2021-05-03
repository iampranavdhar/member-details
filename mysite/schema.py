import graphene
from graphene_django import DjangoObjectType
from database.models import Category, Member

class CategoryType(DjangoObjectType):
    class Meta:
        model = Category
        fields = ("id", "name", "stack_image","members")

class MemberType(DjangoObjectType):
    class Meta:
        model = Member
        fields = ("id", "name", "image","intro", "description", "githubusername", "discordusername", "email", "phone","category")

class Query(graphene.ObjectType):
    all_members = graphene.List(MemberType)
    all_categories = graphene.List(CategoryType)
    category_by_name = graphene.Field(CategoryType, name=graphene.String(required=True))
    category_by_id = graphene.Field(CategoryType,id=graphene.Int(required=True))
    member_by_id = graphene.Field(MemberType,id=graphene.Int(required=True))

    def resolve_all_members(root, info):
        # We can easily optimize query count in the resolve method
        return Member.objects.select_related("category").all()

    def resolve_all_categories(root, info):
        # We can easily optimize query count in the resolve method
        return Category.objects.all()

    def resolve_category_by_name(root, info, name):
        try:
            return Category.objects.get(name=name)
        except Category.DoesNotExist:
            return None
    def resolve_category_by_id(root, info, id):
        try:
            return Category.objects.get(id=id)
        except Category.DoesNotExist:
            return None
    def resolve_member_by_id(root, info, id):
        try:
            return Member.objects.get(id=id)
        except Member.DoesNotExist:
            return None

schema = graphene.Schema(query=Query)